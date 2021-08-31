from django.contrib.auth.decorators import login_required
from django.shortcuts import render


def index():
    """main posts page"""
    pass


def single_post():
    """shows only one post chosen"""
    pass


@login_required
def favourites():
    """favourite posts"""
    pass


@login_required
def edit_post():
    """editing your own post"""
    pass



