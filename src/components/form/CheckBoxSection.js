import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import ArrowsFunction from './ArrowsComponent'

import {
  CHECKBOX_SKILLS_OPTIONS,
  CHECKBOX_PRIORITIES_OPTIONS,
} from '../../utils/Constants'

const StyledFormLabel = withStyles({
  root: {
    fontSize: '25px',
    marginBottom: '10px',
    color: '#ff3864',
  },
})(FormLabel)

const StyledFormControlLabel = withStyles({
  root: {
    height: '40px',
    '& .MuiCheckbox-root': {
      height: '40px',
    },
  },
})(FormControlLabel)

class CheckBoxSection extends React.Component {
  render() {
    let { sectionId, checkedValue, handleCheckBoxChange, name } = this.props
    let constants =
      name === 'Priorities (Pick Two)'
        ? CHECKBOX_PRIORITIES_OPTIONS
        : CHECKBOX_SKILLS_OPTIONS

    return (
      <section id={sectionId}>
        <FormGroup
          column
          onKeyPress={event => {
            if (event.key === 'Enter') {
              window.location.hash = `#${sectionId + 1}`
              window.location.href = `#${sectionId + 1}`
            }
          }}
        >
          <StyledFormLabel component="legend">{`${name} *`}</StyledFormLabel>
          {constants.map(option => {
            return (
              <StyledFormControlLabel
                control={
                  <Checkbox
                    checked={checkedValue[option]}
                    onChange={handleCheckBoxChange}
                    name={option}
                  />
                }
                label={option}
              />
            )
          })}
        </FormGroup>

        <ArrowsFunction sectionId={sectionId} />
      </section>
    )
  }
}

export default CheckBoxSection
