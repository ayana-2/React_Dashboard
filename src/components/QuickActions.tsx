import ActionCard from "./ActionCard";

const actions = [
    {
        icon: "♙",
        title: "View All Students",
        description: "Browse and manage student records",
        color: "blue"
    },
    {
        icon: "🎓",
        title: "Add New Student",
        description: "Register a new student",
        color: "green"
    },
    {
        icon: "▣",
        title: "Manage Courses",
        description: "View and edit course information",
        color: "purple"
    }
];

function QuickActions() {
    return (
        <div className="quick-actions">

            <h3>Quick Actions</h3>

            <p className="quick-description">
                Common tasks you might want to perform
            </p>

            <div className="action-container">

                {actions.map((action, index) => (
                    <ActionCard
                        key={index}
                        icon={action.icon}
                        title={action.title}
                        description={action.description}
                        color={action.color}
                    />
                ))}

            </div>

        </div>
    );
}

export default QuickActions;