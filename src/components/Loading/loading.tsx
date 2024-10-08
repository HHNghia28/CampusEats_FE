import classNames from 'classnames/bind';
import style from './Loading.module.scss';
const cx = classNames.bind(style);

const Loading = () => {
    return (
        <div className={cx('loading')}>
            Loading
        </div>
    );
};

export default Loading;
