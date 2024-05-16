import { Badge } from '@/components/Badge';
import {
  CATEGORY_COLOR,
  MILESTONES_GROUPED,
  MILESTONES_YEARS,
  type MilestoneTableProps,
} from './';
import { formatDate } from '@/lib/utils';
import { Fragment } from 'react';
import { Link } from '@/components/Link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table';

export const MilestonesTable = ({ tableCaption }: MilestoneTableProps) => {
  return (
    <Table>
      <TableCaption {...tableCaption}>
        All milestones in chronological order
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Event</TableHead>
          <TableHead className="visible@m">Category</TableHead>
          <TableHead className="visible@m">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {MILESTONES_YEARS.map(year => (
          <Fragment key={year}>
            <TableRow background="var(--bg-100)">
              <TableCell colSpan={3}>
                <Badge variant="negative">{year}</Badge>
              </TableCell>
            </TableRow>
            {MILESTONES_GROUPED[year].map(m => (
              <TableRow key={m.event}>
                <TableCell>
                  {m.url ? <Link href={m.url}>{m.event}</Link> : m.event}
                  <div className="flex text:color:mute hidden@m">
                    {m.categoryName} {' ✳︎ '} {formatDate(m.date)}
                  </div>
                </TableCell>
                <TableCell className="visible@m white-space:nowrap">
                  <Badge beacon={CATEGORY_COLOR[m.category]}>
                    {m.categoryName}
                  </Badge>
                </TableCell>
                <TableCell className="visible@m white-space:nowrap">
                  {formatDate(m.date)}
                </TableCell>
              </TableRow>
            ))}
          </Fragment>
        ))}
      </TableBody>
    </Table>
  );
};
