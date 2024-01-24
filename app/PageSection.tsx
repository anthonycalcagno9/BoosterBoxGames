export const PageSection = (props: any) => {
return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-start bg-white items-center justify-center w-full h-[75vh] sm:h-[75vh]">
        {props.children}
    </div>

)
}