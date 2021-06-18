from rest_framework import routers, urlpatterns
from .api import ApiViewSet

router.register("api/coderhub", ApiViewSet, "api")urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', user_views.register, name='register'),
    path('profile/', user_views.profile, name='profile'),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    path('', include('home.urls')),
]

urlpatterns = router.urls
