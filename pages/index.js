import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToWaitlist = this.scrollToWaitlist.bind(this)
  }

  scrollToWaitlist = () =>  {
    this.textInput.focus()
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Filehive - A dataset marketplace for Filecoin</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.header}>
          <img src="/filehive-logo.png" className={styles.logo} />
          <div className={styles.buttonSmall} style={{float: 'right'}} onClick={this.scrollToWaitlist}>Join waitlist!</div>
        </div>

        <div className={styles.main}>
          <div className={styles.hero}>
            <h1>A dataset marketplace for Filecoin</h1>
            <h2>Data has quickly become the world's most in demand resource. It's the fuel for the AI and machine learning applications of the future. Filehive makes it easy to buy and sell curated datasets.</h2>
            <div className={styles.waitlist}>
              <input className={styles.input} type="text" placeholder="Email address" ref={(input) => { this.textInput = input; }}  />
              <div className={styles.button}>Join waitlist!</div>
            </div>
          </div>

          <div className={styles.buyers}>
            <div className={styles.blob}></div>
            <div className={styles.inner}>
              <h3>Raise the IQ of your AI and machine learning applications</h3>
              <h4>Buy curated collections of data to feed your engine:</h4>

              <div className={styles.flex}>
                <div className={styles.col}>
                  <img className={styles.category} src="/category-expressions.png" /><br />
                  <span className={styles.label}>Expressions (JPG)</span>
                </div>
                <div className={styles.col}>
                  <img className={styles.category} src="/category-weather.png" /><br />
                  <span className={styles.label}>Weather (JSON)</span>
                </div>
                <div className={styles.col}>
                  <img className={styles.category} src="/category-social.png" /><br />
                  <span className={styles.label}>Trending posts (JSON)</span>
                </div>
                <div className={styles.col}>
                  <img className={styles.category} src="/category-stats.png" /><br />
                  <span className={styles.label}>Statistics (CSV)</span>
                </div>
                <div className={styles.col}>
                  <img className={styles.category} src="/category-xrays.png" /><br />
                  <span className={styles.label}>X-rays (PNG)</span>
                </div>
                <div className={styles.col}>
                  <img className={styles.category} src="/category-prices.png" /><br />
                  <span className={styles.label}>Historical prices (SQL)</span>
                </div>
              </div>
              <h3>...and so much more!</h3>
            </div>
          </div>
        </div>

        <div className={styles.earn}>
          <div className={styles.inner}>
            <h3>Earn FIL from datasets</h3>
            <h2>Upload and maintain any type of dataset on Filehive to earn FIL. You earn FIL each time someone downloads your dataset. Keep your datasets updated frequently to earn recurring revenue.</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <img className={styles.icon} src="/icon-create.png" /><br />
                <b>1. Create datasets</b>
              </div>
              <div className={styles.step}>
                <img className={styles.icon} src="/icon-upload.png" /><br />
                <b>2. Upload datasets</b>
              </div>
              <div className={styles.step}>
                <img className={styles.icon} src="/icon-earn.png" /><br />
                <b>3. Earn FIL</b>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.blob2}></div>
          <div className={styles.button} onClick={this.scrollToWaitlist}>Join waitlist!</div>
        </div>
        <div className={styles.powered}>
          <div className={styles.flex1}>
            <div>
              <img src="/filecoin-logo.png" height="18px" width="18px" style={{marginRight: 6}} />
            </div>
            <div>
              Powered by <b>Filecoin</b>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
