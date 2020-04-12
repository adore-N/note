import { connect } from 'react-redux'
import UI from './UI'

const mapStateToProps = ({ kindlist }) => ({ kindlist })

export default connect(mapStateToProps)(UI)