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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Zulna" />
      <meta property="og:description" content="Service tools" />
    </>
  ),
  logo: <span>ZLN Docs</span>,
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://service.zulnaaa.com" target="_blank">
        SUP DUDE, WELCOME TO MY DOCS
      </a>
    )
  },
  editLink:{
    component: null
  },
  feedback: {
    content: null
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/zulna10" target="_blank">
          ZULNA
        </a>
        .
      </span>
    
    ),
    
  },
  primaryHue: 100,
  primarySaturation:100,
}