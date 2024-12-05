import { Badge } from '@/components/Badge'
import {
  CATEGORY_COLOR,
  MILESTONES_GROUPED,
  MILESTONES_YEARS,
  type MilestoneTableProps,
} from './'
import { formatDate } from '@/lib/utils'
import { Fragment } from 'react'
import { Link } from '@/components/Link'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table'
import { Text } from '@/components/Text'

export const MilestonesTable = ({ tableCaption }: MilestoneTableProps) => {
  return (
    <Table>
      <TableCaption {...tableCaption}>
        All milestones in descending chronological order
      </TableCaption>
      <TableHeader>
        <TableRow animate={false}>
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
                <Badge variant="primary">{year}</Badge>
              </TableCell>
            </TableRow>
            {MILESTONES_GROUPED[year].map(m => (
              <TableRow href={m.url} key={m.event}>
                <TableCell>
                  {m.url ? (
                    <Link className="mb:2xs" href={m.url}>
                      {m.event}
                    </Link>
                  ) : (
                    m.event
                  )}
                  <Text className="mb:0 hidden@m" color="mute" size="s" tag="p">
                    {m.categoryName} ✳︎ {formatDate(m.date)}
                  </Text>
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
  )
}
