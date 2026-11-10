interface ActionCardProps {
    icon: string;
    title: string;
    description: string;
    color: string;
}

function ActionCard({ icon, title, description, color }: ActionCardProps) {
    return (
        <div className="action-card">

            <span className={`action-icon ${color}`}>
                {icon}
            </span>

            <h4>{title}</h4>

            <p>{description}</p>

        </div>
    );
}

export default ActionCard;