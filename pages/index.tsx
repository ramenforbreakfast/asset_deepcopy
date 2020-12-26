import * as React from 'react'
import Page, { PageHeader } from '../components/Page'
import AddressBar from '../components/AddressBar'
import { CenteredColumn } from '../components/Layouts'

function Home() {
  const [addresses, setAddresses] = React.useState<string[]>(['1000', '2000', '3000'])
  
  const addAddress = (address: string) => {
    const addressToAdd: Array<string> = [address]
    setAddresses(addresses.concat(addressToAdd))
  }
  
  const removeAddress = (idx: number) => {
    //let tempAddresses = addresses
    //tempAddresses.splice(idx, 1)
    //setAddresses(tempAddresses)
    // setAddresses happens AFTER this function runs
    setAddresses(addresses.filter((addresses, index) => idx !== index))
    console.log("After Removal:\n")
    console.log(addresses)
  }
  
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-16">
          <div className="relative flex flex-col space-y-8 md:items-center">
              <svg id="Capa_1" height="85" viewBox="0 0 513.087 513.087" width="85" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g>
                    <path d="m135.571 293.998h268.841v110.355h-268.841z" fill="#f7d8a4"/>
                    <path d="m62.593 432.39 8.921 15.119c6.627 11.23 18.695 18.122 31.735 18.122h305.591c13.04 0 25.108-6.892 31.735-18.122l8.921-15.119 12.326-22.45h-413.331z" fill="#e4e1e5"/>
                        <g>
                        <path d="m498.646 387.49h-484.205c-3.833 0-6.941 3.108-6.941 6.941v7.402c0 16.876 13.68 30.556 30.556 30.556h436.975c16.876 0 30.556-13.68 30.556-30.556v-7.402c.001-3.833-3.107-6.941-6.941-6.941z" fill="#f8f7f8"/>
                        <path d="m71.969 413.415c-15.301 0-27.975-11.247-30.207-25.925h-27.321c-3.833 0-6.941 3.108-6.941 6.941v7.403c0 16.876 13.681 30.556 30.556 30.556h436.975c12.776 0 23.714-7.843 28.278-18.975z" fill="#efedee"/>
                        <path d="m145.89 387.49h-85.556c-7.037 0-12.742-5.705-12.742-12.742v-51.906c0-7.037 5.705-12.742 12.742-12.742h85.556c7.037 0 12.742 5.705 12.742 12.742v51.906c0 7.037-5.704 12.742-12.742 12.742z" fill="#fcf1de"/>
                        <path d="m199.345 310.1h-81.426c-8.178 0-14.807-6.629-14.807-14.807v-47.776c0-8.178 6.629-14.807 14.807-14.807h81.426c8.178 0 14.807 6.629 14.807 14.807v47.776c.001 8.178-6.629 14.807-14.807 14.807z" fill="#fcf6ed"/>
                        <path d="m310.386 310.1h-81.426c-8.178 0-14.807-6.629-14.807-14.807v-47.776c0-8.178 6.629-14.807 14.807-14.807h81.426c8.178 0 14.807 6.629 14.807 14.807v47.776c0 8.178-6.629 14.807-14.807 14.807z" fill="#fcf1de"/>
                        <path d="m421.427 310.1h-81.426c-8.178 0-14.807-6.629-14.807-14.807v-47.776c0-8.178 6.629-14.807 14.807-14.807h81.426c8.178 0 14.807 6.629 14.807 14.807v47.776c0 8.178-6.629 14.807-14.807 14.807z" fill="#fcf6ed"/>
                        <path d="m147.809 289.998c-10.554 0-19.11-8.556-19.11-19.11v-38.178h-10.78c-8.178 0-14.807 6.629-14.807 14.807v47.776c0 8.178 6.629 14.807 14.807 14.807h81.426c8.178 0 14.807-6.629 14.807-14.807v-5.295z" fill="#fcf1de"/>
                        <path d="m263.828 289.998c-13.303 0-24.088-10.785-24.088-24.088v-33.2h-10.78c-8.178 0-14.807 6.629-14.807 14.807v47.776c0 8.178 6.629 14.807 14.807 14.807h81.426c8.178 0 14.807-6.629 14.807-14.807v-5.295z" fill="#f6e2c4"/>
                        <path d="m370.421 289.998c-10.847 0-19.64-8.793-19.64-19.64v-37.648h-10.78c-8.178 0-14.807 6.629-14.807 14.807v47.776c0 8.178 6.629 14.807 14.807 14.807h81.426c8.178 0 14.807-6.629 14.807-14.807v-5.295z" fill="#fcf1de"/>
                        <path d="m258.095 387.49h-87.884c-6.394 0-11.578-5.184-11.578-11.578v-54.234c0-6.394 5.184-11.578 11.578-11.578h87.884c6.394 0 11.578 5.184 11.578 11.578v54.234c0 6.395-5.184 11.578-11.578 11.578z" fill="#fcf6ed"/>
                        <path d="m370.465 387.49h-90.544c-5.66 0-10.249-4.588-10.249-10.249v-56.893c0-5.66 4.588-10.249 10.249-10.249h90.544c5.66 0 10.249 4.588 10.249 10.249v56.893c0 5.661-4.589 10.249-10.249 10.249z" fill="#fcf1de"/>
                        <path d="m479.447 387.49h-86.426c-6.797 0-12.307-5.51-12.307-12.307v-52.776c0-6.797 5.51-12.307 12.307-12.307h86.426c6.797 0 12.307 5.51 12.307 12.307v52.776c0 6.797-5.51 12.307-12.307 12.307z" fill="#fcf6ed"/>
                        <path d="m87.028 371.746c-8.775 0-15.889-7.114-15.889-15.889v-45.757h-10.805c-7.037 0-12.742 5.705-12.742 12.742v51.906c0 7.037 5.705 12.742 12.742 12.742h85.556c7.037 0 12.742-5.705 12.742-12.742v-3.003h-71.604z" fill="#f6e2c4"/>
                        <path d="m198.169 371.746c-8.83 0-15.989-7.158-15.989-15.989v-45.657h-11.97c-6.394 0-11.578 5.184-11.578 11.578v54.234c0 6.394 5.184 11.578 11.578 11.578h87.884c6.394 0 11.578-5.184 11.578-11.578v-4.167h-71.503z" fill="#fcf1de"/>
                        <path d="m309.701 371.746c-9.102 0-16.481-7.379-16.481-16.481v-45.165h-13.299c-5.66 0-10.249 4.588-10.249 10.249v56.893c0 5.66 4.588 10.249 10.249 10.249h90.543c5.66 0 10.249-4.588 10.249-10.249v-5.496z" fill="#f6e2c4"/>
                        <path d="m416.569 371.746c-6.797 0-12.307-5.51-12.307-12.307v-49.339h-11.24c-6.797 0-12.307 5.51-12.307 12.307v52.776c0 6.797 5.51 12.307 12.307 12.307h86.426c6.797 0 12.308-5.51 12.308-12.307v-3.437z" fill="#fcf1de"/>
                            <g>
                                <g>
                                <path d="m494.281 143.909c5.398 0 9.774 5.136 9.774 11.471v9.428c0 6.385-4.442 11.541-9.881 11.47l-478.175-6.182c-4.413-.057-7.965-4.272-7.965-9.452v-7.283c0-5.221 3.606-9.453 8.054-9.453h478.193z" fill="#f6e2c4"/>
                                </g>
                            </g>
                            <path d="m39.723 170.404 162.95 2.107v-28.602h-162.95z" fill="#f7d8a4"/>
                            <path d="m182.673 180.659c0 9.872-8.003 17.876-17.876 17.876h-87.2c-9.872 0-17.876-8.003-17.876-17.876v-94.068c0-9.872 8.003-17.876 17.876-17.876h87.2c9.872 0 17.876 8.003 17.876 17.876z" fill="#fcf6ed"/>
                            <path d="m121.086 176.28c-13.215 0-23.928-10.713-23.928-23.928v-83.636h-19.56c-9.872 0-17.875 8.003-17.875 17.875v94.068c0 9.872 8.003 17.875 17.875 17.875h87.2c9.872 0 17.875-8.003 17.875-17.875v-4.379z" fill="#fcf1de"/>
                        </g>
                    <path d="m19.601 135.319 474.945-55.655c5.361-.628 9.11-6.238 8.372-12.531l-1.097-9.364c-.743-6.341-5.755-10.945-11.149-10.242l-474.207 61.792c-4.377.57-7.414 5.17-6.811 10.315l.848 7.234c.607 5.185 4.681 8.969 9.099 8.451z" fill="#f6e2c4"/>
                    </g>
                    <g>
                    <path d="m498.646 379.99h-.007c.387-1.542.615-3.147.615-4.807v-52.775c0-10.922-8.885-19.808-19.807-19.808h-36.948c.797-2.291 1.235-4.748 1.235-7.307v-47.776c0-12.3-10.007-22.307-22.308-22.307h-81.426c-5.679 0-10.865 2.136-14.808 5.643-3.942-3.507-9.129-5.643-14.808-5.643h-81.424c-5.679 0-10.865 2.136-14.808 5.643-3.942-3.507-9.128-5.643-14.807-5.643h-81.427c-12.3 0-22.307 10.007-22.307 22.307v47.776c0 2.559.439 5.016 1.235 7.307h-36.512c-11.161 0-20.242 9.081-20.242 20.242v51.906c0 1.815.263 3.567.713 5.242h-26.364c-7.962 0-14.441 6.479-14.441 14.441v7.402c0 20.984 17.072 38.056 38.057 38.056h20.253l6.745 11.43c7.938 13.454 22.574 21.811 38.194 21.811h305.59c15.62 0 30.256-8.357 38.194-21.811l6.745-11.43h21.253c20.984 0 38.056-17.072 38.056-38.056v-7.402c0-7.962-6.478-14.441-14.441-14.441zm-14.392-57.582v52.775c0 2.651-2.156 4.807-4.807 4.807h-86.426c-2.651 0-4.808-2.156-4.808-4.807v-52.775c0-2.651 2.156-4.808 4.808-4.808h86.426c2.651 0 4.807 2.157 4.807 4.808zm-318.121 53.504v-54.234c0-2.249 1.829-4.078 4.078-4.078h87.884c2.249 0 4.078 1.83 4.078 4.078v54.234c0 2.249-1.829 4.078-4.078 4.078h-87.884c-2.249 0-4.078-1.83-4.078-4.078zm111.04 1.33v-56.893c0-1.516 1.233-2.749 2.749-2.749h90.543c1.516 0 2.749 1.233 2.749 2.749v56.893c0 1.516-1.233 2.749-2.749 2.749h-90.543c-1.516-.001-2.749-1.234-2.749-2.749zm62.828-137.032h81.426c4.029 0 7.308 3.278 7.308 7.307v47.776c0 4.029-3.278 7.307-7.308 7.307h-81.426c-4.029 0-7.308-3.278-7.308-7.307v-47.776c0-4.029 3.279-7.307 7.308-7.307zm-111.041 0h81.426c4.029 0 7.308 3.278 7.308 7.307v47.776c0 4.029-3.278 7.307-7.308 7.307h-81.426c-4.029 0-7.308-3.278-7.308-7.307v-47.776c0-4.029 3.279-7.307 7.308-7.307zm-118.348 55.083v-47.776c0-4.029 3.277-7.307 7.307-7.307h81.427c4.029 0 7.307 3.278 7.307 7.307v47.776c0 4.029-3.277 7.307-7.307 7.307h-81.427c-4.029 0-7.307-3.278-7.307-7.307zm-55.52 79.455v-51.906c0-2.891 2.352-5.242 5.242-5.242h85.557c2.891 0 5.242 2.352 5.242 5.242v51.906c0 2.89-2.352 5.242-5.242 5.242h-85.557c-2.891 0-5.242-2.351-5.242-5.242zm442.995 27.086c0 12.713-10.343 23.056-23.056 23.056h-238.935c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h200.266l-2.246 3.807c-5.254 8.903-14.939 14.434-25.276 14.434h-305.59c-10.337 0-20.022-5.531-25.276-14.434l-2.246-3.807h128.381c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-166.052c-12.714 0-23.057-10.343-23.057-23.056v-6.844h483.087z"/>
                    <path d="m15.898 177.597 36.324.48v2.582c0 13.992 11.383 25.375 25.375 25.375h87.2c13.992 0 25.375-11.383 25.375-25.375v-.821l119.45 1.556h.1c4.097 0 7.444-3.294 7.497-7.402.055-4.142-3.26-7.543-7.401-7.597l-119.646-1.559v-13.427h184.018v15.818l-32.401-.419c-.033 0-.065 0-.099 0-4.097 0-7.444 3.294-7.497 7.403-.054 4.142 3.261 7.543 7.402 7.597l152.481 1.971c.069.001.138.001.207.001 4.284 0 8.38-1.718 11.554-4.851 3.634-3.587 5.718-8.733 5.718-14.12v-9.428c0-10.461-7.749-18.971-17.274-18.971h-304.108v-13.526l305.246-35.769c9.46-1.109 16.165-10.463 14.948-20.853l-1.097-9.365c-.627-5.35-3.296-10.219-7.322-13.359-3.573-2.787-7.922-4.012-12.245-3.447l-300.614 39.171c-3.153-10.429-12.847-18.046-24.292-18.046h-87.2c-13.992 0-25.375 11.383-25.375 25.375v10.505l-36.726 4.786c-8.403 1.095-14.366 9.45-13.292 18.625l.848 7.233c.495 4.229 2.403 8.087 5.369 10.888-4.704 2.919-7.889 8.424-7.889 14.733v7.283c.001 9.239 6.895 16.843 15.366 16.953zm480.658-22.217v9.428c0 1.381-.47 2.669-1.255 3.445-.244.241-.618.526-1.02.526h-.011l-105.08-1.358v-16.012h105.091c.906 0 2.275 1.584 2.275 3.971zm-480.324 7.22c-.228-.184-.699-.856-.699-1.955v-7.283c0-1.095.469-1.766.697-1.953h35.992v11.667zm475.41-107.636c.399-.055.811.19 1.083.402.871.679 1.487 1.904 1.647 3.275l1.097 9.365c.278 2.371-.896 4.104-1.796 4.208l-107.599 12.61-2.196-15.817zm-424.419 31.627c0-5.721 4.654-10.375 10.375-10.375h87.2c3.774 0 7.074 2.032 8.889 5.053l-106.464 13.873zm-49.653 30.148 351.433-45.794 2.169 15.625-248.252 29.09c-4.114.482-7.058 4.208-6.576 8.322.481 4.115 4.207 7.058 8.322 6.576l50.507-5.918v56.019c0 5.721-4.654 10.375-10.375 10.375h-87.2c-5.721 0-10.375-4.654-10.375-10.375v-43.369l25.302-2.965c4.114-.482 7.058-4.208 6.576-8.322-.482-4.115-4.213-7.061-8.322-6.576l-71.907 8.427c-.249-.159-.793-.771-.92-1.858l-.848-7.233c-.128-1.093.262-1.815.466-2.024z"/>
                    </g>
                </g>
              </svg>
            <PageHeader
              title="Asset DeepCopy"
              subtitle="A tool for creating portfolio weight-based snapshots and replicating them"
            />
            <AddressBar addresses={addresses} addAddress={addAddress} removeAddress={removeAddress} />
          </div>
          
        </div>

      </CenteredColumn>
    </Page>
  )
}

export default Home