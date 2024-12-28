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

    it("should return all posts if called without options", () => {
      const f_posts = postsService.findMany();
      expect(f_posts).toEqual(expect.arrayContaining(posts));

      // реализуйте тест-кейс
    });

    it("should return correct posts for skip and limit options", () => {
      const f_posts = postsService.findMany({ skip: 1, limit: 1 });
      expect(f_posts).toEqual(expect.arrayContaining([posts[1]]));
      // реализуйте тест-кейс
    });

    it("should return correct posts only skip", () => {
      const f_posts = postsService.findMany({ skip: 1 });
      expect(f_posts).toEqual(
        expect.arrayContaining([posts[1], posts[2], posts[3]])
      );
      // реализуйте тест-кейс
    });

    it("should return correct posts only limit", () => {
      const f_posts = postsService.findMany({ limit: 1 });
      expect(f_posts).toEqual(expect.arrayContaining([posts[0]]));
      // реализуйте тест-кейс
    });

    // реализуйте недостающие тест-кейсы
  });
});
