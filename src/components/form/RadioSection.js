import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import ArrowsFunction from './ArrowsComponent'

import {
  CHECKBOX_SPECS_OPTIONS,
  CHECKBOX_PROJECT_TYPE_OPTIONS,
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

class RadioSection extends React.Component {
  render() {
    let { sectionId, handleRadioChange, name, selectedValue } = this.props
    let constants =
      name === 'Project Type'
        ? CHECKBOX_PROJECT_TYPE_OPTIONS
        : CHECKBOX_SPECS_OPTIONS

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
          <StyledFormLabel component="legend">{name}</StyledFormLabel>
          <RadioGroup value={selectedValue} onChange={handleRadioChange}>
            {constants.map(option => {
              return (
                <StyledFormControlLabel
                  control={<Radio />}
                  label={option}
                  value={option}
                />
              )
            })}
          </RadioGroup>
        </FormGroup>

        <ArrowsFunction sectionId={sectionId} />
      </section>
    )
  }
}

export default RadioSection
