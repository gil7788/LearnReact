import * as faker from "faker";
import { FixedSizeList } from "react-window";

export default function FakeUsers({ amount }) {
    const UserRow = ({ index, style}) => {
        const { name, email, avatar } = bigList[index];
        return (
            <div style={style}>
                <img 
                    src={avatar}
                    alt={name}
                    width={100}
                    height={100} />
            <div>
                <h2>{index+1}. {name} - {email}</h2>
            </div>
        </div>
        );
    };

    const bigList = [...Array(amount)].map(() => ({
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
      }));
    // return <List data={bigList} renderItem={UserRow} />;
    return (
    <div>
        <FixedSizeList
        height={window.innerHeight}
        width={window.innerWidth}
        itemSize={100}
        itemCount={5}
        >
        { UserRow }
    </FixedSizeList>
    </div>
    );
}
