import {compose, withState, withProps} from 'recompose';

const withMeasurements = compose(
    withState('elementX', 'setX', 0),
    withState('elementY', 'setY', 0),
    withState('elementWidth', 'setWidth', 0),
    withState('elementHeight', 'setHeight', 0)
);

const withOnLayout = withProps(({setX, setY, setWidth, setHeight}) => ({
    onLayoutSetMeasurements: event => {
        setX(event.nativeEvent.layout.x);
        setY(event.nativeEvent.layout.y);
        setWidth(event.nativeEvent.layout.width);
        setHeight(event.nativeEvent.layout.height);
    },
}));

export const withSelfMeasure = compose(withMeasurements, withOnLayout);
