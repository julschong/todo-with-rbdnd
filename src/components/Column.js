import { Droppable } from 'react-beautiful-dnd';
import { Button } from 'reactstrap';
import Item from './Item';

const Column = ({ columnId, column, addItem }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <div
                className="p-3"
                style={{
                    margin: 8,
                    backgroundColor: 'lightgrey',
                    borderRadius: '5px',
                    position: 'relative'
                }}
            >
                <h2 className="font-size-1.2em">{column.name}</h2>
                <Button
                    onClick={() => addItem(columnId)}
                    style={{
                        lineHeight: '1em',
                        display: 'inline-block',
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        fontSize: '2em',
                        padding: 0,
                        backgroundColor: 'transparent',
                        border: 'none'
                    }}
                >
                    +
                </Button>
                <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver
                                        ? 'gray'
                                        : 'lightgrey',
                                    width: 250,
                                    minHeight: 100,
                                    borderRadius: '5px'
                                }}
                            >
                                {column.items.map((item, index) => {
                                    return (
                                        <Item
                                            item={item}
                                            index={index}
                                            key={item.id}
                                        />
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        </div>
    );
};

export default Column;