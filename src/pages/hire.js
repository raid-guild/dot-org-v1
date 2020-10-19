import React from 'react'
import ReactGA from 'react-ga'

import Web3 from 'web3'
// import Web3Modal from 'web3modal'
// import WalletConnectProvider from '@walletconnect/web3-provider'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Snackbar from '@material-ui/core/Snackbar'

// import DisclaimerSection from '../components/form/DisclaimerSection'
import TextFieldSection from '../components/form/TextFieldSection'
import CheckBoxSection from '../components/form/CheckBoxSection'
import RadioSection from '../components/form/RadioSection'
import SuccessComponent from '../components/form/SuccessComponent'
import ArrowsComponent from '../components/form/ArrowsComponent'

import Layout from '../components/layout/layout'

import DatePicker from 'react-datepicker'

import { TEXT_FIELD_PROPS } from '../utils/Constants'

import 'react-datepicker/dist/react-datepicker.css'

import '../styles/Form.css'

const THEME = createMuiTheme({
  typography: {
    fontFamily: "'Mirza', cursive",
    fontSize: '25px',
  },
  overrides: {
    MuiFormControl: {
      root: {
        fontSize: '25px',
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: '25px',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#ff3864',
      },
    },
    MuiFormControlLabel: {
      root: {
        height: '40px',
        padding: '5px',
        alignItems: 'center',
        marginLeft: null,
        marginRight: null,
        verticalAlign: null,
      },
    },
    MuiStepConnector: {
      root: {
        padding: null,
      },
    },
    MuiStepLabel: {
      root: {
        fontSize: '17px',
      },
    },
    MuiIconButton: {
      label: {
        height: '40px',
      },
    },
  },
})

// const providerOptions = {
//   walletconnect: {
//     package: WalletConnectProvider,
//     options: {
//       infuraId: process.env.GATSBY_INFURA_ID,
//     },
//   },
// }

// const web3Modal = new Web3Modal({
//   network: 'mainnet',
//   cacheProvider: false,
//   providerOptions,
// })

//MAINNET
const DAI_CONTRACT_ADDRESS = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
const DAI_ABI = require('../abi/DAI_ABI.json')

// KOVAN TESTNET
// const DAI_CONTRACT_ADDRESS = '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa'
// const DAI_ABI = require('../abi/DAI_ABI.json')

class HireUs extends React.Component {
  state = {
    // Data from input
    project_type: 'New Project',
    specs: 'Yes, I have detailed specs / requirements',
    project_name: '',
    summary: '',
    checkbox: {
      Consulting: false,
      'DAO Design / Deployment': false,
      'Development (Frontend, Backend)': false,
      'Marketing (copy writing, strategy)': false,
      'Smart Contracts (Solidity, Audits)': false,
      'Visual Design (Branding, Illustration, etc)': false,
      'UX/UI Design': false,
      'Other / Not Sure': false,
      Fast: false,
      Cheap: false,
      Good: false,
    },
    link: '',
    completion_date: new Date().toISOString().split('T')[0],
    date_place_holder: new Date(),
    budget: '',
    name: '',
    email: '',
    handle: '',
    about_guild: '',
    to_know: '',

    //Checks
    initiated_transaction: false,
    booking_confirmed: false,
    networkID: '',
    transaction_hash: '',
    snackbar_open: false,
    invalid_email: false,
    invalid_priorities: false,
    insufficient_dai: false
  }

  handleDate = date => {
    let ISODate = new Date(date).toISOString().split('T')[0]
    this.setState({ completion_date: ISODate, date_place_holder: date })
  }

  handleTextFieldChange = (event, name) => {
    switch (name) {
      case 'project_name':
        this.setState({ project_name: event.target.value })
        break
      case 'summary':
        this.setState({ summary: event.target.value })
        break
      case 'link':
        this.setState({ link: event.target.value })
        break
      case 'completion_date':
        this.setState({ completion_date: event.target.value })
        break
      case 'budget':
        this.setState({ budget: event.target.value })
        break
      case 'name':
        this.setState({ name: event.target.value })
        break
      case 'email':
        this.setState({ email: event.target.value })
        break
      case 'handle':
        this.setState({ handle: event.target.value })
        break
      case 'about_guild':
        this.setState({ about_guild: event.target.value })
        break
      case 'to_know':
        this.setState({ to_know: event.target.value })
        break
      default:
        return
    }
  }

  handleCheckBoxChange = event => {
    let checkbox = { ...this.state.checkbox }
    checkbox[event.target.name] = !checkbox[event.target.name]
    this.setState({
      checkbox,
    })
  }

  handleProjectChange = event => {
    this.setState({
      project_type: event.target.value,
    })
  }

  handleSpecChange = event => {
    this.setState({
      specs: event.target.value,
    })
  }

  startTransaction = async (priorities, skills) => {
    const DAI = new this.state.web3.eth.Contract(DAI_ABI, DAI_CONTRACT_ADDRESS)

    const balance = await DAI.methods.balanceOf(this.state.accounts[0]).call()

    if (!isNaN(parseInt(balance)) && parseInt(balance) < 300) {
      this.setState({
        initiated_transaction: false,
        insufficient_dai: true,
        snackbar_open: true,
      })
      return;
    } else {
      this.setState({initiated_transaction: true});
    }

    try {
      await DAI.methods
        .transfer(
          '0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d',
          this.state.web3.utils.toWei('300')
        )
        .send({
          from: this.state.accounts[0],
        })
        .once('transactionHash', async hash => {
          await fetch('https://guild-keeper.herokuapp.com/hireus/mongo', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              key: process.env.GATSBY_ACCESS_KEY,
              project_name: this.state.project_name,
              project_type: this.state.project_type,
              summary: this.state.summary,
              specs: this.state.specs,
              skills_needed: skills,
              priorities: priorities,
              budget: parseInt(this.state.budget),
              name: this.state.name,
              email: this.state.email,
              handle: this.state.handle,
              link: this.state.link,
              completion_date: this.state.completion_date,
              about_guild: this.state.about_guild,
              to_know: this.state.to_know,
              transaction_hash: hash,
            }),
          })
          await fetch('https://guild-keeper.herokuapp.com/hireus/airtable', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              key: process.env.GATSBY_ACCESS_KEY,
              project_name: this.state.project_name,
              project_type: this.state.project_type,
              summary: this.state.summary,
              specs: this.state.specs,
              skills_needed: skills,
              priorities: priorities,
              budget: parseInt(this.state.budget),
              name: this.state.name,
              email: this.state.email,
              handle: this.state.handle,
              link: this.state.link,
              completion_date: this.state.completion_date,
              about_guild: this.state.about_guild,
              to_know: this.state.to_know,
              transaction_hash: hash,
            }),
          })
          this.setState({
            transaction_hash: hash,
            booking_confirmed: true,
            initiated_transaction: false,
          })
        })
    } catch (err) {
      this.setState({
        initiated_transaction: false,
        snackbar_open: true,
      })
    }
  }

  initTransaction = async (priorities, skills) => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum)
      const accounts = await window.ethereum.enable()
      let networkID = await web3.eth.net.getId()
      networkID = networkID.toString()

      this.setState(
        { web3, accounts, networkID, initiated_transaction: true },
        () => {
          return networkID === '1'
            ? this.startTransaction(priorities, skills)
            : null
        }
      )

      window.ethereum.on(
        'networkChanged',
        async function(networkID) {
          this.setState({ networkID, initiated_transaction: false })
        }.bind(this)
      )

      window.ethereum.on(
        'accountsChanged',
        async function(accounts) {
          this.setState({ accounts })
        }.bind(this)
      )
    } else {
      this.setState({ snackbar_open: true })
    }
  }

  validateData = () => {
    ReactGA.event({
      category: 'Pay',
      action: 'Action to pay for hiring the guild',
    })

    let { summary, email, project_name, budget, name, checkbox } = this.state
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let priorities = []
    let skills = []

    for (let key in checkbox) {
      if (key === 'Fast' || key === 'Good' || key === 'Cheap') {
        if (checkbox[key]) {
          priorities.push(key)
        }
      } else {
        if (checkbox[key]) {
          skills.push(key)
        }
      }
    }

    if (!project_name) return (window.location.href = '#2')
    if (!summary) return (window.location.href = '#3')
    if (skills.length === 0) return (window.location.href = '#5')
    if (priorities.length === 0) return (window.location.href = '#6')
    if (priorities.length === 3 || priorities.length === 1) {
      this.setState({ snackbar_open: true, invalid_priorities: true })
      return (window.location.href = '#6')
    } else {
      this.setState({ invalid_priorities: false })
    }
    if (!budget) return (window.location.href = '#9')
    if (!name) return (window.location.href = '#10')
    if (!email) return (window.location.href = '#11')

    if (!pattern.test(email)) {
      this.setState({ invalid_email: true, snackbar_open: true })
      return (window.location.href = '#11')
    } else {
      this.setState({ invalid_email: false }, () => {
        this.initTransaction(priorities, skills)
      })
    }
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname)
  }

  render() {
    let {
      booking_confirmed,
      checkbox,
      project_type,
      specs,
      initiated_transaction,
      networkID,
      snackbar_open,
      invalid_email,
      invalid_priorities,
      insufficient_dai,
      web3,
    } = this.state
    return (
      <Layout>
        <ThemeProvider theme={THEME}>
          {booking_confirmed ? (
            <SuccessComponent hash={this.state.transaction_hash} />
          ) : (
            <div className="form">
              {/* <DisclaimerSection /> */}

              {TEXT_FIELD_PROPS.map((field, index) => {
                if (field.type === 'text') {
                  return (
                    <TextFieldSection
                      key={index}
                      state_name={field.state_name}
                      id={
                        field.label === 'Brief Summary'
                          ? 'outlined-multiline-static'
                          : field.state_name
                      }
                      variant={
                        field.label === 'Brief Summary'
                          ? 'outlined'
                          : 'standard'
                      }
                      multiline={field.label === 'Brief Summary' ? true : false}
                      rows={field.label === 'Brief Summary' ? 4 : 1}
                      required={field.required}
                      label={field.label}
                      sectionId={index + 1}
                      handleChange={(event, name) =>
                        this.handleTextFieldChange(event, name)
                      }
                      value={this.state[field.state_name]}
                      type={
                        field.state_name === 'email'
                          ? 'email'
                          : field.state_name === 'budget'
                          ? 'number'
                          : 'text'
                      }
                      initiated_transaction={initiated_transaction}
                      networkID={networkID}
                      validateData={this.validateData}
                    />
                  )
                }
                if (field.type === 'date') {
                  return (
                    <section id={index + 1} key={index}>
                      <label id="date-label">{field.label}</label>
                      <DatePicker
                        style={{ fontSize: '25px', color: '#ff3864' }}
                        minDate={new Date()}
                        dateFormat="yyyy/MM/dd"
                        selected={this.state.date_place_holder}
                        onChange={this.handleDate}
                      />
                      <ArrowsComponent sectionId={index + 1} />
                    </section>
                  )
                }
                if (field.type === 'checkbox') {
                  return (
                    <CheckBoxSection
                      key={index}
                      name={field.label}
                      sectionId={index + 1}
                      checkedValue={checkbox}
                      handleCheckBoxChange={event => {
                        this.handleCheckBoxChange(event)
                      }}
                    />
                  )
                }
                if (field.type === 'radio') {
                  return field.state_name === 'project_type' ? (
                    <RadioSection
                      key={index}
                      name={field.label}
                      sectionId={index + 1}
                      selectedValue={project_type}
                      handleRadioChange={event => {
                        this.handleProjectChange(event)
                      }}
                    />
                  ) : (
                    <RadioSection
                      key={index}
                      name={field.label}
                      sectionId={index + 1}
                      selectedValue={specs}
                      handleRadioChange={event => {
                        this.handleSpecChange(event)
                      }}
                    />
                  )
                }
              })}

              <Snackbar
                open={snackbar_open}
                autoHideDuration={6000}
                onClose={() => this.setState({ snackbar_open: false })}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                message={
                  invalid_priorities
                    ? 'Choose a max of two priorities.'
                    : invalid_email
                    ? 'The email address provided is not valid!'
                    : !web3
                    ? 'Not a web3 browser! Install Metamask.'
                    : insufficient_dai
                    ? 'Not enough DAI in wallet!'
                    : 'User cancelled transaction!'
                }
              ></Snackbar>
            </div>
          )}
        </ThemeProvider>
      </Layout>
    )
  }
}

export default HireUs
