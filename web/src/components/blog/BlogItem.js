import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';
import ParagraphText from '../typography/ParagraphText';

const BlogItem = ({ title, path, image, publishedAt, categories }) => (
  <BlogItemStyles>
    <Link to={`/blogs/${path}`}>
      <GatsbyImage
        image={image.imageData}
        alt={image.altText}
        className="img"
      />
    </Link>
    <Link to={`/blogs/${path}`}>
      <h1>{title}</h1>
    </Link>
    {publishedAt && (
      <ParagraphText className="publishedAt">
        {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
      </ParagraphText>
    )}
    <ParagraphText className="categoriesText">
      {categories.map((cat, i) => (
        <span key={cat.slug.current}>
          <Link to={`/categories/${cat.slug.current}`}>{cat.title}</Link>
          {i < categories.length - 1 ? ', ' : ''}
        </span>
      ))}
    </ParagraphText>
  </BlogItemStyles>
);

export default BlogItem;
