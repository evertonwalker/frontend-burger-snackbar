

interface Contact {
    name: string;
    number: string;
}

export async function getContact(number: string): Promise<{ status: boolean, obj: Contact | null }> {
    const response = await fetch(`${process.env.URL}/contact/${number}`,);
    const result = await response.json();
    return result.id ? { status: true, obj: result } : { status: false, obj: null };
}

export async function createContact(number: string, name: string): Promise<Contact> {
    const response = await fetch(`${process.env.URL}/contact/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number, name })
    });
    const result = await response.json();
    return result;
}