import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import Context from '../../../store/context'
import { useTheme } from '@emotion/react'
import './toggle.scss'

const Toggle = ({siteTitle}) => {
  const { state, dispatch } = useContext(Context)
  const theme = useTheme()
  return (
    <header className={state.isDark ? theme.dark.font : theme.light.font} stylee={{ paddingTop: 20, paddingBottom: 20, paddingRight: 20 }}>
      <div className="toggle-container">
        <span style={{ color: state.isDark ? 'grey' : 'yellow' }} role='img'>
          ☀︎
        </span>
        <span className="toggle">
          <input type="checkbox" name="checkbox" id="checkbox" className="checkbox" onChange={() => dispatch({ type: 'TOGGLE_DARK' })} checked={state.isDark} />
          {/* Below comment removes jsx label warning  */}
          <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
          <label htmlFor="checkbox"></label>
        </span>
        <span
            style={{ color: state.isDark ? "slateblue" : "grey" }}
            role="img"
          >
            ☾
          </span>
      </div>

    </header>
  )
}

Toggle.propTypes = {
  siteTitle: PropTypes.string,
}

Toggle.defaultProps = {
  siteTitle: ``,
}

export default Toggle
