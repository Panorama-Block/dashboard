'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './sidebar-styles.module.scss'
import MenuItems from '../menu-items/menu-items'

// import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@//components/ui/sidebar'
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@//components/ui/collapsible'
// import { ChevronDown } from 'lucide-react'

type Props = {
  actual: string
  onChange: (coin: string) => void
  open: (page: string) => void
  active?: string
}

const AppSidebar: React.FC<Props> = ({
  actual,
  onChange,
  open,
  active,
}: Props) => {
  const router = useRouter()
  const [coins, setCoins] = useState([
    {
      title: 'Bitcoin',
      icon: '/coins/bitcoin.png',
      url: '/pano-view/bitcoin',
    },
    {
      title: 'Ethereum',
      icon: '/coins/eth.png',
      disabled: true,
      url: '/pano-view/ethereum',
    },
    {
      title: 'ICP',
      icon: '/coins/icp.png',
      url: '/pano-view/icp',
    },
    {
      title: 'Solana',
      icon: '/coins/solana.png',
      url: '/pano-view/solana',
    },
  ])

  const [pages, setPages] = useState([
    {
      title: 'Pano View',
      icon: '/account/dash.png',
      url: `/pano-view/${actual.toLowerCase()}`,
    },
    {
      title: 'AI Marketplace',
      icon: '/account/trend.png',
      url: '/ai-marketplace',
      disabled: true,
    },
    {
      title: 'DeFi Vista',
      icon: '/account/pano.png',
      url: '/panoranking/solana',
      disabled: true,
    },
    {
      title: 'Liquid Swap',
      icon: '/account/transfers.png',
      url: '/liquid-swap',
    },
    {
      title: 'X AI Agents',
      icon: '/account/research.png',
      url: '/x-ai-agents',
      disabled: false,
    },
    {
      title: 'Whale Hunting',
      icon: '/account/wallet.png',
      url: `/whale-hunting/${actual.toLowerCase()}`,
    },
    {
      title: 'Portfolio',
      icon: '/account/portfolio.png',
      disabled: true,
      url: '/portfolio/solana',
    },
  ])

  const getActive = (title: string) => {
    const active = window.location.href.toLowerCase()

    switch (title.toLowerCase()) {
      case 'solana':
        return active.includes('solana')
      default:
        return active.includes('bitcoin')
    }
  }

  const handleClick = (type: string, value: string) => {
    console.log(type, value)
    if (type === 'coin') {
      onChange(value)

      if (value == 'Bitcoin') {
        router.push(`/pano-view/bitcoin`)
      } else {
        router.push(`/pano-view/${value.toLowerCase()}`)
      }
    } else {
      open(value)
    }
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <img
          src="/logo.png"
          alt=""
          onClick={() => router.push('/pano-view/bitcoin')}
        />
      </div>

      <div className={styles.body}>
        {/* <SidebarMenu>
          <Collapsible defaultOpen className="group/collapsible mx-2" >
            <SidebarGroup className='p-0'>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className='mb-1' defaultChecked>
                  <p className='mx-4 text-[16px] text-zinc-300'>Tokens</p>
                  <ChevronDown className="text-zinc-200 ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <MenuItems active={actual} items={coins} action={(value) => { handleClick("coin", value) }} />
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <Collapsible defaultOpen className="group/collapsible mx-2 mb-2" >
            <SidebarGroup className='p-0'>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className='mb-1' defaultChecked>
                  <p className='mx-4 text-[16px] text-zinc-300'>Stacks</p>
                  <ChevronDown className="text-zinc-200 ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <MenuItems active={actual} items={coins} action={(value) => { handleClick("coin", value) }} />
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarMenu> */}

        {/* <MenuItems active={actual} items={coins} action={(value) => { handleClick("coin", value) }} /> */}

        <div className="mt-4">
          <MenuItems
            items={pages}
            action={(value) => {
              handleClick('page', value)
            }}
            panelActive={active}
          />
        </div>
      </div>
    </div>
  )
}

export default AppSidebar
