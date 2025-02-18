import ContentAreaMapper from '../content-area/mapper'
import {
  Column,
  Grid,
  Row,
  SafeVisualBuilderExperience,
} from '@/lib/optimizely/types/experience'

export default function VisualBuilderExperienceWrapper({
  experience,
}: {
  experience?: SafeVisualBuilderExperience
}) {
  return (
    <div className="vb:outline relative w-full flex-1">
      <div className="vb:outline relative w-full flex-1">
        {experience?.composition?.grids?.map((grid: Grid) => (
          <div
            key={grid.key}
            className="vb:grid relative flex w-full flex-col flex-nowrap justify-start"
            data-epi-block-id={grid.key}
          >
            {grid.rows?.map((row: Row) => (
              <div
                key={row.key}
                className="vb:row flex flex-1 flex-row flex-nowrap justify-start"
              >
                {row.columns?.map((column: Column) => (
                  <div
                    className="vb:col flex flex-1 flex-col flex-nowrap justify-start"
                    key={column.key}
                  >
                    <ContentAreaMapper
                      experienceElements={column.elements}
                      isVisualBuilder
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
