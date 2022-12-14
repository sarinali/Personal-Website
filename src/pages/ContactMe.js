import PageIntro from "../components/PageIntro";


function ContactMe() {
    return (
        <div>
            <PageIntro
                    pageName={'Contact Me'}
                    displayIndex={'| 04'}
                    displayText={['Want more?', 'I hope LinkedIn, Instagram and my resume is enough...']}
                ></PageIntro>
        </div>
    )
}

export default ContactMe;