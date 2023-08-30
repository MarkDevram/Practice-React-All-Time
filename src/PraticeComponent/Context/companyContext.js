import React from "react"
const CompanyContext = React.createContext()
const ConsumerContext = CompanyContext.Consumer
const ProviderContext = CompanyContext.Provider

export { CompanyContext, ConsumerContext, ProviderContext }
