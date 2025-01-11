import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ReadMore = ({ children, limit = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Safely handle both text and JSX components
    const content = typeof children === 'string' ? children : React.Children.toArray(children).join('');

    return (
        <div>
            <p>
                {isExpanded ? content : `${content.substring(0, limit)}...`}
            </p>
            <Button 
                variant="link" 
                className="p-0" 
                onClick={toggleReadMore}
            >
                {isExpanded ? 'Read Less' : 'Read More'}
            </Button>
        </div>
    );
};

export default ReadMore;
