export default function Program() {
    return (
        <>
            <div className='grid grid-cols-2 gap-2'>
                <div className='shadow p-3 bg-slate-100 rounded'>
                    <strong>Step 1</strong>
                    <h2 className='text-2xl'>Learn Front End Technologies</h2>
                    <p>You will be learning how to develop a web application using latest technologies and industry best practices. At the end of the program, you are ready to start a Front-End developer career.</p>
                </div>
                <div className='shadow p-3 bg-slate-100 rounded'>
                    <strong>Step 2</strong>
                    <h2 className='text-2xl'>Learn Back End Technologies</h2>
                    <p>You will be learning how to create a database for your application and build a RESTfull API so that other applications can connect with your back-end application.</p>
                </div>
            </div>
        </>
    )
}