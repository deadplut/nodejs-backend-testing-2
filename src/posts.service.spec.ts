import { PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe(".findMany", () => {
    const posts = [
      { text: "Post 1" },
      { text: "Post 2" },
      { text: "Post 3" },
      { text: "Post 4" },
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it("should return all post texts if called without options", () => {
      const f_posts = postsService.findMany();
      const f_texts = f_posts.map((post) => post.text);
      const expected_texts = posts.map((post) => post.text);
      expect(f_texts).toEqual(expect.arrayContaining(expected_texts));
    });

    it("should return correct post texts for skip and limit options", () => {
      const f_posts = postsService.findMany({ skip: 1, limit: 1 });
      const f_texts = f_posts.map((post) => post.text);
      const expected_texts = [posts[1].text];
      expect(f_texts).toEqual(expect.arrayContaining(expected_texts));
    });

    it("should return correct post texts only skip", () => {
      const f_posts = postsService.findMany({ skip: 1 });
      const f_texts = f_posts.map((post) => post.text);
      const expected_texts = posts.slice(1).map((post) => post.text);
      expect(f_texts).toEqual(expect.arrayContaining(expected_texts));
    });

    it("should return correct post texts only limit", () => {
      const f_posts = postsService.findMany({ limit: 1 });
      const f_texts = f_posts.map((post) => post.text);
      const expected_texts = [posts[0].text];
      expect(f_texts).toEqual(expect.arrayContaining(expected_texts));
    });

    // реализуйте недостающие тест-кейсы
  });
});
