import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { SVGProps } from 'react';

export const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '/', current: true },
    { name: 'Team', icon: UsersIcon, href: '#', current: false },
    { name: 'Projects', icon: FolderIcon, href: '#', current: false },
    { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
    { name: 'Documents', icon: InboxIcon, href: '#', current: false },
    { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
    { name: 'Settings', icon: Cog6ToothIcon, href: '/settings', current: false },
]

const icon = navigation.map(()=>{

})

const iconMapping: { [key: string]: React.ComponentType<SVGProps<SVGSVGElement> & { title?: string; titleId?: string }> } = {
    "home": HomeIcon,
    "users": UsersIcon,
    "folder": FolderIcon,
    "calendar": CalendarIcon,
    "inbox": InboxIcon,
    "chartbar": ChartBarIcon,
    "cog": Cog6ToothIcon
}


export function setIcon(text: string): any{
    return iconMapping[text]
}

export const secondaryNavigation = [
    { name: 'Website redesign', href: '#' },
    { name: 'GraphQL API', href: '#' },
    { name: 'Customer migration guides', href: '#' },
    { name: 'Profit sharing program', href: '#' },
]

export const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

let nav = [
    { "name": "Dashboard", "icon": "home", "href": "/", "current": true },
    { "name": "Team", "icon": "users", "href": "#", "current": false },
    { "name": "Projects", "icon": "folder", "href": "#", "current": false },
    { "name": "Calendar", "icon": "calendar", "href": "#", "current": false },
    { "name": "Documents", "icon": "inbox", "href": "#", "current": false },
    { "name": "Reports", "icon": "chartbar", "href": "#", "current": false },
    { "name": "Settings", "icon": "cog", "href": "/settings", "current": false }
]