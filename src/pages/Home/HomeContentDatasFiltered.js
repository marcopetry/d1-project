import { DatasFilteredApi } from '@apis/DatasFilteredApi'

import { HomeContentDatasItems } from './HomeContentDatasItems'

export const HomeContentDatasFiltered = ({ filterId }) => {
  return (
    <DatasFilteredApi filterId={filterId}>
      {({ data }) => data && data.map((item) => <HomeContentDatasItems item={item} />)}
    </DatasFilteredApi>
  )
}
