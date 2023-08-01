import SvgIconStyle from "../components/SvgIconStyle";



const getIcon = (name) => (
    <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '25px', height: '25px' }} />
);

const ICONS = {
    blog: getIcon('ic_blog'),
    cart: getIcon('ic_cart'),
    invoice: getIcon('ic_invoice'),
    mail: getIcon('ic_mail'),
    user: getIcon('ic_user'),
    product: getIcon('ic_product'),
    banking: getIcon('ic_banking'),
    calendar: getIcon('ic_calendar'),
    ecommerce: getIcon('ic_ecommerce'),
    analytics: getIcon('ic_analytics'),
    dashboard: getIcon('ic_dashboard'),
    job: getIcon('ic_job')
};


export const sidebarItems = [
    {
        id: 1,
        title: "OVERVIEW",
        listItems: [
            {
                id: 1,
                title: "App",
                url: "app",
                icon: ICONS.dashboard
            },
            {
                id: 2,
                title: "Ecom",
                url: "ecommerce",
                icon: ICONS.ecommerce
            },
            {
                id: 3,
                title: "analytics",
                url: "analytics",
                icon: ICONS.analytics
            },

        ]
    },
    {
        id: 2,
        title: "MANAGEMENT",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "users",
                icon: ICONS.user
            },
            {
                id: 2,
                title: "Products",
                url: "products",
                icon: ICONS.product
            },
            {
                id: 3,
                title: "Orders",
                url: "orders",
                icon: ICONS.cart
            },
            {
                id: 4,
                title: "Invoices",
                url: "invoices",
                icon: ICONS.invoice
            },
            {
                id: 5,
                title: "Blogs",
                url: "blogs",
                icon: ICONS.blog
            },
            {
                id: 6,
                title: "Job",
                url: "jobs",
                icon: ICONS.job
            },

        ]
    }
]



export default sidebarItems;