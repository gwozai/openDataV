import { ComponentGroup } from '@/enum'
import type { ComponentConfig, GroupType, ComponentOptions } from '@/types/component'

const component: ComponentConfig = {
  component: 'BorderBox6',
  group: ComponentGroup.BORDER,
  label: '06号边框',
  propValue: {
    colorLeft: '#11eefd',
    colorRight: '#0078d2',
    backgroundColor: ''
  },
  icon: 'line',
  style: {
    width: 200,
    height: 200
  }
}

const style: Array<GroupType> = []

const attrs: Array<GroupType> = [
  {
    name: '边框色彩',
    uid: 'display',
    children: [
      {
        key: 'colorLeft',
        label: '边框颜色1',
        type: 'color'
      },
      {
        key: 'colorRight',
        label: '边框颜色2',
        type: 'color'
      },
      {
        key: 'backgroundColor',
        label: '底色',
        type: 'color'
      }
    ]
  }
]

const componentOptions: ComponentOptions = { component, style, attrs }
export default componentOptions