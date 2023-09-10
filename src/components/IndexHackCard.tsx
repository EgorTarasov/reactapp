type hackTag = {
    tag: string;
};

interface IndexHackCardProps {
    imageUrl: string;
    hackName: string;
    hackEndRegistrationDate: string;
    hackPrize: number;
    hackTags: hackTag[];
    hackTeamMinimumSize: number;
    hackTeamMaximumSize: number;
}

export default function IndexHackCard(props: IndexHackCardProps) {
    const {
        imageUrl,
        hackName,
        hackEndRegistrationDate,
        hackPrize,
        hackTags,
        hackTeamMinimumSize,
        hackTeamMaximumSize,
    } = props;

    // const imageUrl = "/images/image-17.png";
    // const hackName = "GAME DEV ХАКАТОН СИНЕУС";
    // const hackEndRegistrationDate = " 22 сентября 07:59";
    // const hackPeople = " от 1 до 5 участников";
    // const hackPrize = " 1 000 000 ₽";

    return (
        <>
            <div className="hack-card">
                <div className="hack-card-photo">
                    <img src={imageUrl} />
                </div>
                <div className="hack-card-main-text">
                    <p>{hackName}</p>
                </div>
                <div className="hack-card-conditions">
                    <p>Регистрация до:{hackEndRegistrationDate}</p>
                    <p>
                        Команда: от {hackTeamMinimumSize} до{" "}
                        {hackTeamMaximumSize} участников
                    </p>
                    <p>Призы: {hackPrize} ₽</p>
                </div>
                <div className="hack-card-tags">
                    {/* TODO: Спросить как динамически всё это выстраивать */}
                    {hackTags.map((tag) => {
                        return (
                            <div className="hack-card-tag">
                                <p>{tag.tag}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
