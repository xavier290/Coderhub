from rest_framework import routers, urlpatterns
from .api import ApiViewSet

router = routers.DefaultRouter()
router.register("api/coderhub", ApiViewSet, "api")

urlpatterns = router.urls
