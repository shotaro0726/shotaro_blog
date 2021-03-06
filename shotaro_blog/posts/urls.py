from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import PostViewSet

app_name = 'posts'
router = SimpleRouter()
router.register('', PostViewSet, basename='posts')
urlpatterns = router.urls