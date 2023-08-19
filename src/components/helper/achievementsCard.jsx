'use client'

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export function AchievementCard({ achievement }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: ' #20232A',
        borderRadius: '15px',
      }}
      contentArrowStyle={{ borderRight: '10px solid #20232A' }}
      iconStyle={{ background: 'white' }}
    >
      <div className="flex flex-col">
        <h1 className=" font-medium text-3xl ">{achievement.title}</h1>
        <div className="flex m-3 text-lg">
          <h3 className="  ">
            {achievement.eventName} {achievement.year}
          </h3>
        </div>
        {achievement.points.map((point, index) => (
          <ul
            className="flex flex-col list-disc px-5"
            key={`experience-point-${index}`}
          >
            <li className="px-2">
              <div className="flex  justify-between">
                <h1 className="font-bold mt-5">{point.winnerName}</h1>
                <p className="m-0">Batch {point.batch}</p>
              </div>
              <ul className=" list-inside m-5">
                {point.positions.map((position, positionIndex) => (
                  <li
                    key={`position-${positionIndex}`}
                    className="font-medium m-1"
                  >
                    {position.eventName} :
                    <span className="px-3">{position.rank}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </div>
    </VerticalTimelineElement>
  )
}
