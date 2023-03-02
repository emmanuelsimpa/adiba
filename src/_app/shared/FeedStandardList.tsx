import * as React from "react";

const activityItems = [
  {
      "id": 1,
      "person": {
        "name": "Lindsay Walton",
        "imageUrl":
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
      },
      "project": "Workcation",
      "commit": "2d89f0c8",
      "environment": "production",
      "time": "1h"
  },
  {
    "id": 2,
    "person": {
        "name": "John Doe",
        "imageUrl": "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    "project": "Project X",
    "commit": "9f9d8e7b",
    "environment": "staging",
    "time": "30m"
  },
]

export default function FeedStandardList() {

    return (
        <div>
          <ul className="divide-y divide-gray-200">
            {activityItems.map((activityItem) => (
              <li key={activityItem.id} className="py-4">
                <div className="flex space-x-3">
                  <img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
                      <p className="text-sm text-gray-500">{activityItem.time}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Deployed {activityItem.project} ({activityItem.commit} in master) to {activityItem.environment}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )
}