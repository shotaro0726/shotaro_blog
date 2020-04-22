from django.urls import path
from .views import PostList, PostDetail

app_name = 'posts'
urlpatterns = [
    path('<str:pk>/',PostDetail.as_view(), name='detail'),
    path('', PostList.as_view(), name='name'),
]