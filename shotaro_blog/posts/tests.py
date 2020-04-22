from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Post

User = get_user_model()

class BlogTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        testuser1 = User.objects.create_user(
            email = '',
            password = ''
        )
        testuser1.save()

        test_post = Post.objects.create(
            author=testuser1,
            title='',
            slug='',
            thumbnail='',
            body=''
        )
        test_post.save()

        def test_blog_content(self):
            post = Post.objects.get()
            expected_author = f'{post.author}'
            expected_title = f'{post.title}'
            expected_slug = f'{post.slug}'
            expected_thumbnail = f'{post.thumbnail}'
            expected_body = f'{post.body}'
            self.assertEquals(expected_author, '')
            self.assertEquals(expected_title, '')
            self.assertEquals(expected_slug, '')
            self.assertEquals(expected_thumbnail, '')
            self.assertEquals(expected_body, '')
            


