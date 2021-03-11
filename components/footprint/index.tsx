import { MdCopyright as Copyright } from 'react-icons/md'
import { copyrightIcon, note } from './styles'

const date = new Date().getFullYear()
//console.log(date)

const Footprint = () => (
  <>
    <small css={note}>
      <Copyright css={copyrightIcon} /> Georgey - {date}
    </small>
  </>
)

export default Footprint
