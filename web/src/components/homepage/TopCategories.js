import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import CategoryGrid from '../category/CategoryGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

const TopCategories = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;
  return (
    <TopCategoriesStyles>
      <SectionTitle>TopCategories</SectionTitle>
      <ParagraphText className="info">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        dolorem ratione laborum nulla minus sit id exercitationem,
        necessitatibus culpa? Esse, sapiente. Magnam voluptatem eveniet nulla
        molestiae dolore, officia itaque aperiam?
      </ParagraphText>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
};

export default TopCategories;
