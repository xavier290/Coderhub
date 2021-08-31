from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('chat/', include('chat.urls')),
    path('api/', include('api.urls')),
    path('accounts/', include('accounts.urls')),
    path('posts/', include('posts.urls')),
    path("", include("frontend.urls")),
]
