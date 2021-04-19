import { DatasApi } from 'apis/DatasApi'

import { HomeContentDatasItems } from './HomeContentDatasItems'

export const HomeContentDatasAll = () => {
  return <DatasApi>{({ data } = {}) => data && data.map((item) => <HomeContentDatasItems item={item} />)}</DatasApi>
}
