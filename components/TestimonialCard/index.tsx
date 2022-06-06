import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    avatar: string;
    avatarHighlight?: boolean;
    username: string;
    verifiedGraduate?: boolean;
    highlight: string;
    description: string;
};

const TestimonialCard: React.FC<IProps> = ({
                                               avatar, avatarHighlight, username, verifiedGraduate, highlight,
                                               description, className, ...props
                                           }) => {
    return (
        <div className={cn(styles.testimonialCard, className)}>
            <div className={styles.header}>
                <img className={cn(styles.avatar, {
                    [styles.avatarHighlight]: avatarHighlight,
                })}
                     src={avatar}
                     alt={''}
                />
                <div>
                    <div className={styles.username}>
                        {username}
                    </div>
                    {verifiedGraduate && (
                        <div className={styles.verifiedGraduate}>
                            Verified Graduate
                        </div>
                    )}
                </div>
            </div>
            <strong className={styles.highlight}>
                {highlight}
            </strong>

            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};

TestimonialCard.defaultProps = {
    avatarHighlight: false,
    verifiedGraduate: true,
};

export default TestimonialCard;
