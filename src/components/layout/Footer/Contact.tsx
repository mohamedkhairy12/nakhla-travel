"use client";

const Contact = () => {
    const contact = [
        { icon: '📍', value: '44 Ryad St, Mohandseen, Cairo, Egypt' },
        { icon: '📞', value: '+20 128 966 6170 / 02 3568 6145' },
        { icon: '💬', value: '+20 128 966 6170' },
        { icon: '✉️', value: 'sales@nakhlatravel.com' },
        { icon: '🌐', value: 'www.nakhla-travel.com' },
    ];
    return (
        <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
                {contact.map((item) => (
                    <li key={item.value} className="flex items-center mb-4">{item.icon} {item.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default Contact;