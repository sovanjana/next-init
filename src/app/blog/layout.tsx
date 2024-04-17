export default function BlogLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className='blog__layout'>
            <h1>Blogs</h1>
            {children}
        </div>
    )
}