

type NavBarLinks = {
    name: string;
    href: string;
}

export const dropDownMenuLinks: NavBarLinks[] = [
    {href: '/', name: 'Home'},
    {href: '/about', name: 'About'},
    {href: '/products', name: 'Products'},
    {href: '/favorites', name: 'Favorites'},
    {href: '/reviews', name: 'Reviews'},
    {href: '/cart', name: 'Cart'},
    {href: '/orders', name: 'Orders'},
    {href: '/admin/sales', name: 'Dashboard'},
]

type NavLinkAdminProps = {
    href:string,
    label:string
}

export const adminLinks:NavLinkAdminProps[] = [
    {href:'/admin/sales', label:'Sales'},
    {href:'/admin/products', label:'My Products'},
    {href:'/admin/products/create', label:'Create New Product'},
]

export let linkPages = {
    HOME : {href:'/', name:'Home'},
    ABOUT : {href:'/about', name:'About'},
    PRODUCTS : {href:'/products', name:'Products'},
    CART : {href:'/cart', name:'Cart'},
    AdminProducts : {href:'/admin/products', name:'Products'},
} as const;

