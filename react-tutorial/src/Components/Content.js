import React, { useState } from "react";
import { ArticleMajor } from "./article";
import { ArticleMinor } from "./article";
import { ArticleMinorArray } from "./article";

export default function Content() {
  const [articles, setArticles] = useState([
    {
      title: "Reduce Sound Pollution in the most Sci-Fi Way!",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ut, itaque doloremque dolorum deleniti dolores consequatur magnam totam, officiis quia laboriosam maiores corrupti? Ipsa placeat quis saepe odio? Sequi optio similique laborum eveniet quas neque iusto fugit, sunt eos laboriosam tenetur quod minus unde eaque commodi cum consequatur non dolorem facilis odio architecto. Explicabo quos minima ex impedit recusandae, soluta quisquam aliquid ipsum. Soluta quos nostrum sequi dolorum nobis officia voluptas libero! Culpa dolore dignissimos accusantium soluta eaque quisquam necessitatibus.",
      thumbnail:
        "https://drive.google.com/uc?id=17ZMTfS0oCd-2Olk3dXu0sM85n3gmGvfx&export=download",
    },
    {
      title: "How not to lose pencils?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ipsum, blanditiis assumenda, perferendis nulla, aut vitae at placeat earum facilis suscipit rerum. In pariatur, consectetur odit aliquid architecto aliquam doloribus? Hic nulla laborum pariatur non expedita, reprehenderit natus facere aperiam laudantium asperiores odit ipsa tempore unde nostrum aspernatur sit doloribus libero et voluptatibus consequuntur vel! Soluta sint ullam necessitatibus voluptatibus repellat vitae pariatur beatae amet earum corrupti fugit obcaecati facilis unde, reiciendis suscipit perferendis ipsum odio ad dolorum officia sapiente!",
      thumbnail:
        "https://drive.google.com/uc?id=1o8fWAZVk-Y5_fgcLFt-dffm707I3mZ3y&export=download",
    },
    {
      title: "Converting Contiuous Energy",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni obcaecati, aspernatur ex iure delectus enim maxime numquam quidem pariatur error sunt quaerat dicta expedita, voluptatem aperiam rem autem quos molestias sequi assumenda nesciunt iste exercitationem? Voluptas repellendus maxime optio qui officiis ut sed aut mollitia iste, et veritatis necessitatibus ducimus. Laudantium ut, ducimus, expedita hic deserunt at itaque est molestias facilis, cupiditate commodi pariatur alias saepe culpa iure ullam doloribus quisquam vel? Ipsum voluptates repudiandae, quidem cupiditate natus voluptate.",
      thumbnail:
        "https://drive.google.com/uc?id=19ryZoWQyDKFVrhVYX-vIEBveBWnpzpwt&export=download",
    },
  ]);
  // the useState function would actually update the array if any function has been called to change it. Like in the below example when we click on any of the articleArray, we delete it (for sample, not actual function)

  // here the "article" variable constructor will store the clicked article on the DOM (which is recieved from the "article.js" file)
  function NavigateTo(article) {
    console.log(article);
    let found = articles.indexOf(article); // this will find the index of the object that agrees or matches with any object found in the array.
    console.log(found);

    articles.splice(article, 1); // this method would not work in react although in local scope in the variable it would be deleted but not in the global scope (where we have to actually change the array)

    setArticles(
      articles.filter((e) => {
        // in this the "e" variable stores all the objects present in the articles array.
        return e !== article;
        // the function returns all the objects in it except the filtered one (which is "article" in this case (which has been clicked))
      })
    ); //here we are setting how the array would look like after any particular function (which means to change array) has been called.

    // when this function is called, the array would be updated and according to that the changes in the DOM would be made.
  }

  return (
    <div id="body">
      <ArticleMajor
        title="The Problem With the Education System"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempora libero ratione in dolor consequatur dicta iure, fugit impedit? Est architecto tempore ut distinctio, consectetur ipsum facilis dolor, quos perspiciatis itaque impedit non molestiae vero aspernatur ducimus nobis sit. Beatae non autem nam iusto mollitia impedit. Doloribus, quaerat? Voluptas illo voluptate repellat voluptatem cupiditate possimus. Ut qui ea consequatur voluptate? Temporibus corporis non ex facilis! Dicta nemo dolore ullam quod quisquam, eligendi."
        thumbnail="https://myqs.app/wp-content/uploads/2019/07/Everything-That-is-Wrong-With-India%E2%80%99s-Education-System.jpg"
        id="article0"
        key="article0"
      />
      {/* here the title is actually a defined variable which is used as PROPS in the file which is being imported. */}

      <ArticleMinor
        title="Creating Energy from Arcade Centers"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempora libero ratione in dolor consequatur dicta iure, fugit impedit? Est architecto tempore ut distinctio, consectetur ipsum facilis dolor, quos perspiciatis itaque impedit non molestiae vero aspernatur ducimus nobis sit. Beatae non autem nam iusto mollitia impedit. Doloribus, quaerat? Voluptas illo voluptate repellat voluptatem cupiditate possimus. Ut qui ea consequatur voluptate? Temporibus corporis non ex facilis! Dicta nemo dolore ullam quod quisquam, eligendi."
        thumbnail="https://drive.google.com/uc?id=1cOcPNCOWli-CN-qRdjWB6QtSJdTuKzJS&export=download"
        id="article1"
        key="article1"
      />
      <ArticleMinor
        title="Converting Energy while Driving Car!"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cupiditate veniam inventore quas dolorum autem ipsa dicta, harum nostrum aperiam eligendi laborum in dolor facere omnis consectetur, sapiente quasi iusto possimus vel molestiae corporis? Quam exercitationem quis dignissimos incidunt aperiam distinctio quos neque laudantium nostrum dolorum, minima totam impedit amet qui temporibus odio sint, est nisi beatae dolore eius fuga, atque ratione doloribus. Enim reiciendis eveniet repellat voluptatum, id deleniti dignissimos veniam in saepe cum? Quibusdam fuga aliquid aut dolor?"
        thumbnail="https://drive.google.com/uc?id=1Be3IVhIQ9yy3bCdWkBT4nfTrAT62b7I7&export=download"
        id="article2"
        key="article2"
      />

      {articles.length === 0 ? "No Article to Display" :
      // if articles.length = 0, print "No article to Display" or print all the available articles
        articles.map((article, index) => {
            return (
              <>
                <ArticleMinorArray
                  articles={article}
                  //what the articles and NavigateTo are doing is actually,
                  // 1) Array is defined in Content File
                  // 2) It is mapped and printed in DOM
                  // 3) A Variable is also passed along with it called "onNavigate"
                  // 4) onNavigate is a function which requires a constructor variable to perform a whole set of operations.
                  // 5) After it is defined here, the constructor variable is defined at the "article" file (template file). -> The defination of this constructor variable is actually the "articles" object itself which is being printed.
                  // 6) Using that variable a set of operations is carried out.
                  // 7) We have filtered the clicked "article" which is actually defined as "articles" in props and printed the whole array except for it.

                  id={"article" + index + 3}
                  onNavigate={NavigateTo} // here we have just passed a function without the brackets and from the "article" file, the function for when the "onClick" function occurs.
                  key={index + 3}
                />
              </>
            );

            // here the props is mapping all the objects in the "articles" array and return an array again which carry out a function. In this, it is to display it in the DOM.
          })}
    </div>
  );
} // ARTICLES
