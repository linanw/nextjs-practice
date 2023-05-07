import 'setimmediate';

export default async function Test() {

    const source = 'From: sender@example.com\nTo: recipient@example.com\nSubject: Hello from ChatGPT\n\nHi,This is a test email message from ChatGPT. I hope you are doing well.';
    const parsed = await require('mailparser').simpleParser(source);

    const res = await fetch("https://api.github.com/users/defunkt");
    const json = await res.json();

    return (
        <>
            <h1>Test</h1><br /><br />
            {json.blog}<br /><br />
            {parsed.subject}<br /><br />
            ------------------------------------<br /><br />
        </>
    );
}