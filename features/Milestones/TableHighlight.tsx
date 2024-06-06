import { Badge } from '@/components/Badge';
import {
  CATEGORY_COLOR,
  MILESTONES_SORTED,
  type MilestoneTableProps,
} from './';
import { formatDate } from '@/lib/utils';
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

export const MilestonesTableHighlight = ({
  tableCaption,
}: MilestoneTableProps) => {
  return (
    <Table>
      <TableCaption {...tableCaption}>
        Highlighted milestones in descending chronological order
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Event</TableHead>
          <TableHead className="visible@m">Category</TableHead>
          <TableHead className="visible@m">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {MILESTONES_SORTED.filter(m => m.highlight).map(m => (
          <TableRow href={m.url} key={m.event}>
            <TableCell>
              {m.url ? <Link href={m.url}>{m.event}</Link> : m.event}
              <div className="color:700 hidden@m">
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
      </TableBody>
    </Table>
  );
};
