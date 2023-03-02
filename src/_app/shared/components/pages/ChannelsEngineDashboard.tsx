import * as React from "react";
import ListTable from "../../ListTable";
import StatsCard from "../../StatsCard";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const data = [
  { name: "Jane Cooper", title: "Product Directives Office", role: "Admin" },
  { name: "Jane Cooper", title: "Product Directives Office", role: "Admin" },
  { name: "Jane Cooper", title: "Product Directives Office", role: "Admin" },
  { name: "Jane Cooper", title: "Product Directives Office", role: "Admin" },
  { name: "Jane Cooper", title: "Product Directives Office", role: "Admin" },
  { name: "Jane Cooper", title: "Product Directives Office", role: "Admin" },
  { name: "Jane Cooper", title: "Product Directives Office", role: "Admin" },
];
const stats = [
  {
    id: 1,
    name: "Total Subscribers",
    stat: "71,897",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Avg. Open Rate",
    stat: "58.16%",
    icon: EnvelopeOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Avg. Click Rate",
    stat: "24.57%",
    icon: CursorArrowRaysIcon,
    change: "3.2%",
    changeType: "decrease",
  },
  {
    id: 4,
    name: "Avg. Text Rate",
    stat: "24.57%",
    icon: CursorArrowRaysIcon,
    change: "3.2%",
    changeType: "decrease",
  },
];

export default function ChannelsEngineDashboard() {
  return (
    <>
      <StatsCard stats={stats} />
      <ul role='list' className='mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2'>
        <ListTable title='Cash/Bank' data={data} />
        <ListTable title='Top 10 Users' data={data} />
      </ul>
    </>
  );
}
