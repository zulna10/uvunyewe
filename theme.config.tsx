import React, { Component } from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { useRouter } from 'next/router'
 
export default {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – ZLN'
      }
    }
  },
  logo: <span>ZLN Docs</span>,
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        SUP DUDE, WELCOME TO MY DOCS
      </a>
    )
  },
  editLink:{
    component: null
  },
  feedback: {
    content: null
  }
}