import Instruction from "./Instruction";
import '../index.css'

const instructions = [
    {
        title: "Add Friends",
        text: 'Start by adding your friends who you frequently share meals with. Click on the "Add Friend" button, enter their name and a profile picture URL, then hit "Add." Your friends will appear in the sidebar.',
    },
    {
        title: "Select a Friend",
        text: "Click on a friend's name to select them. You'll see their details and current balance displayed. If they're highlighted, they're selected.",
    },
    {
        title: "Split the Bill",
        text: "Once you've selected a friend, you can split the bill with them. Enter the total bill value and how much each person paid. Choose who's paying the bill from the dropdown menu.",
    },
    {
        title: "Review Balances",
        text: "After splitting the bill, review the updated balances for you and your friend. Our app calculates who owes what, so you'll always know where you stand.",
    },
    {
        title: "Keep Track",
        text: "[Eat-N-Split app] keeps track of all your shared expenses, making it easy to see who owes who and settle up whenever you need to.",
    },

];

function InstructionList() {
    return <ul>{instructions.map((item) => <Instruction title={item.title} text={item.text} />)}</ul>;
}

export default InstructionList;
