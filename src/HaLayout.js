import { Layout } from '@react-admin/ra-enterprise'
import { AppLocationContext } from '@react-admin/ra-navigation'

import HaAppBar from './HaAppBar'
import HaMenu from './menu/HaMenu'
import { MyBreadcrumb } from './MyBreadcrumb'

const HaLayout = props => (
  <AppLocationContext>
    <Layout {...props} appBar={() => <></>} menu={HaMenu} breadcrumb={MyBreadcrumb} />
  </AppLocationContext>
)

export default HaLayout
